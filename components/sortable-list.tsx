"use client"
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    PointerSensor,
    UniqueIdentifier,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import {
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";

/* --------------------------------------------------
 
    TYPES
 
-------------------------------------------------- */

export type SortableRenderFunction<T> = (info: {
    item: T;
    isActive: boolean;
    isDragged: boolean;
    ref: (node: HTMLElement | null) => void;
    props?: React.HTMLAttributes<HTMLElement>;
    handleProps?: React.HTMLAttributes<HTMLElement>;
}) => JSX.Element;

/* --------------------------------------------------
 
    SORTABLE ITEM (internal)
 
-------------------------------------------------- */

type SortableItemProps<T> = {
    id: UniqueIdentifier;
    item: T;
    renderFunction: SortableRenderFunction<T>;
    isDragged?: boolean;
};

const SortableItem = <T extends object>({
    id,
    item,
    renderFunction,
    isDragged = false
}: SortableItemProps<T>) => {
    /* -------------------------
        STATE
    ------------------------- */

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        activeIndex,
        index
    } = useSortable({
        id,
    });

    /* -------------------------
        RENDER
    ------------------------- */

    return renderFunction({
        item,
        ref: setNodeRef,
        props: {
            ...attributes,
            style: {
                transform: CSS.Transform.toString(transform),
                transition
            }
        },
        handleProps: listeners,
        isActive: index >= 0 && activeIndex === index,
        isDragged
    });
};

/* --------------------------------------------------
 
    SORTABLE
 
-------------------------------------------------- */

type SortableListProps<T> = {
    items: T[];
    getItemId?: (item: T) => UniqueIdentifier;
    renderItem: SortableRenderFunction<T>;
    onSort: (oldIndex: number, newIndex: number) => void;
};

const defaultGetItemId = (item: any) => item.id;

export const SortableList = <T extends object>({
    items,
    getItemId = defaultGetItemId,
    renderItem,
    onSort
}: SortableListProps<T>) => {
    /* -------------------------
        STATE
    ------------------------- */

    const itemIds = useMemo(() => items.map(getItemId), [items, getItemId]);

    const [activeId, setActiveId] = useState<UniqueIdentifier>();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    /* -------------------------
        HANDLERS
    ------------------------- */

    const handleDragStart = useCallback((event: DragStartEvent) => {
        setActiveId(event.active.id);
    }, []);

    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            const { active, over } = event;
            if (over && active.id !== over.id) {
                const oldIndex = itemIds.indexOf(active.id);
                const newIndex = itemIds.indexOf(over.id);
                if (onSort) onSort(oldIndex, newIndex);
            }
            setActiveId(undefined);
        },
        [itemIds, onSort]
    );

    const handleDragCancel = () => {
        setActiveId(undefined);
    };

    /* -------------------------
        RENDER
    ------------------------- */

    if (typeof window !== "object") {
        return (
            <></>
        );
    }

    return (
        <>
            <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
                collisionDetection={closestCenter}
                modifiers={[restrictToFirstScrollableAncestor]}
            >
                <SortableContext items={itemIds} strategy={horizontalListSortingStrategy}>
                    {itemIds.map((id, i) => (
                        <SortableItem
                            key={i}
                            id={id}
                            item={items[i]}
                            renderFunction={renderItem}
                        />
                    ))}
                </SortableContext>

                {createPortal(
                    <DragOverlay adjustScale={false} dropAnimation={null}>
                        {activeId ? (
                            <SortableItem
                                id={activeId}
                                item={items[itemIds.indexOf(activeId)]}
                                renderFunction={renderItem}
                                isDragged
                            />
                        ) : (
                            <></>
                        )}
                    </DragOverlay>,
                    document.body
                )}
            </DndContext>
        </>
    );
};
