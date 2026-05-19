const ease = [0.76, 0, 0.24, 1] as const;

export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease } }
};

export const slide = {
    initial: { x: 80 },
    enter: (i: number) => ({ x: 0, transition: { duration: 0.8, ease, delay: 0.05 * i } }),
    exit: (i: number) => ({ x: 80, transition: { duration: 0.8, ease, delay: 0.05 * i } })
};

export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.3 } }
};

export const translate = {
    initial: { y: "100%", opacity: 0 },
    enter: (i: number[]) => ({ y: 0, opacity: 1, transition: { duration: 1, ease, delay: i[0] } }),
    exit: (i: number[]) => ({ y: "100%", opacity: 0, transition: { duration: 0.7, ease, delay: i[1] } })
};
