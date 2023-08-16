function DragIcon({ className, ...props }: { className: string }) {
    return (
        <svg
            className={className}
            {...props}
            xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M359.788 864Q330 864 309 842.788q-21-21.213-21-51Q288 762 309.212 741q21.213-21 51-21Q390 720 411 741.212q21 21.213 21 51Q432 822 410.788 843q-21.213 21-51 21Zm240 0Q570 864 549 842.788q-21-21.213-21-51Q528 762 549.212 741q21.213-21 51-21Q630 720 651 741.212q21 21.213 21 51Q672 822 650.788 843q-21.213 21-51 21Zm-240-216Q330 648 309 626.788q-21-21.213-21-51Q288 546 309.212 525q21.213-21 51-21Q390 504 411 525.212q21 21.213 21 51Q432 606 410.788 627q-21.213 21-51 21Zm240 0Q570 648 549 626.788q-21-21.213-21-51Q528 546 549.212 525q21.213-21 51-21Q630 504 651 525.212q21 21.213 21 51Q672 606 650.788 627q-21.213 21-51 21Zm-240-216Q330 432 309 410.788q-21-21.213-21-51Q288 330 309.212 309q21.213-21 51-21Q390 288 411 309.212q21 21.213 21 51Q432 390 410.788 411q-21.213 21-51 21Zm240 0Q570 432 549 410.788q-21-21.213-21-51Q528 330 549.212 309q21.213-21 51-21Q630 288 651 309.212q21 21.213 21 51Q672 390 650.788 411q-21.213 21-51 21Z" /></svg>
    );
}

export default DragIcon;