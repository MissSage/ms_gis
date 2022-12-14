declare const _sfc_main: import("vue").DefineComponent<{
    leftDrawer: {
        type: BooleanConstructor;
        required: false;
    };
    leftDrawerWidth: {
        type: NumberConstructor;
        required: false;
    };
    leftDrawerAbsolute: {
        type: BooleanConstructor;
        required: false;
    };
    leftDrawerBarPosition: {
        type: StringConstructor;
        required: false;
    };
    leftDrawerTitle: {
        type: StringConstructor;
        required: false;
    };
    rightDrawer: {
        type: BooleanConstructor;
        required: false;
    };
    rightDrawerWidth: {
        type: NumberConstructor;
        required: false;
    };
    rightDrawerAbsolute: {
        type: BooleanConstructor;
        required: false;
    };
    rightDrawerBarPosition: {
        type: StringConstructor;
        required: false;
    };
    rightDrawerTitle: {
        type: StringConstructor;
        required: false;
    };
    bottomDrawer: {
        type: BooleanConstructor;
        required: false;
    };
    bottomDrawerHeight: {
        type: NumberConstructor;
        required: false;
    };
    bottomDrawerBarPosition: {
        type: StringConstructor;
        required: false;
    };
    bottomDrawerTitle: {
        type: StringConstructor;
        required: false;
    };
    topDrawer: {
        type: BooleanConstructor;
        required: false;
    };
    topDrawerHeight: {
        type: NumberConstructor;
        required: false;
    };
    topDrawerBarPosition: {
        type: StringConstructor;
        required: false;
    };
    topDrawerTitle: {
        type: StringConstructor;
        required: false;
    };
    theme: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: {
        /** 显示左侧抽屉 */
        leftDrawer?: boolean | undefined;
        leftDrawerWidth?: number | undefined;
        leftDrawerAbsolute?: boolean | undefined;
        /** 左侧抽屉的按钮位置 */
        leftDrawerBarPosition?: "top" | "center" | "bottom" | undefined;
        leftDrawerTitle?: string | undefined;
        /** 显示右侧抽屉 */
        rightDrawer?: boolean | undefined;
        rightDrawerWidth?: number | undefined;
        rightDrawerAbsolute?: boolean | undefined;
        /** 右侧抽屉的按钮位置 */
        rightDrawerBarPosition?: "top" | "center" | "bottom" | undefined;
        rightDrawerTitle?: string | undefined;
        /** 显示下侧抽屉 */
        bottomDrawer?: boolean | undefined;
        bottomDrawerHeight?: number | undefined;
        /** 下侧抽屉的按钮位置 */
        bottomDrawerBarPosition?: "center" | "left" | "right" | undefined;
        bottomDrawerTitle?: string | undefined;
        /** 显示上侧抽屉 */
        topDrawer?: boolean | undefined;
        topDrawerHeight?: number | undefined;
        /** 上侧抽屉的按钮位置 */
        topDrawerBarPosition?: "center" | "left" | "right" | undefined;
        topDrawerTitle?: string | undefined;
        /**
         * 主题设置
         */
        theme?: "darkblue" | "dark" | "light" | undefined;
    };
    state: {
        leftDrawerOpen: boolean;
        rightDrawerOpen: boolean;
        bottomDrawerOpen: boolean;
        topDrawerOpen: boolean;
    };
    computedContentWidthClass: import("vue").ComputedRef<string>;
    toggleDrawer: (drawer: "rtl" | "ltr" | "btt" | "ttb", open?: boolean | undefined) => void;
    SideDrawer: import("vue").DefineComponent<{
        hideBar: {
            type: BooleanConstructor;
            required: false;
        };
        direction: {
            type: StringConstructor;
            required: false;
        };
        modelValue: {
            type: BooleanConstructor;
            required: true;
        };
        theme: {
            type: StringConstructor;
            required: false;
        };
        barPosition: {
            type: StringConstructor;
            required: false;
        };
        absolute: {
            type: BooleanConstructor;
            required: false;
        };
        width: {
            type: NumberConstructor;
            required: false;
        };
        title: {
            type: StringConstructor;
            required: false;
        };
    }, {
        emit: (e: "collapse", isCollapsed: boolean) => any; /** 显示右侧抽屉 */
        props: {
            hideBar?: boolean | undefined;
            direction?: "rtl" | "ltr" | "btt" | "ttb" | undefined;
            modelValue: boolean;
            theme?: "darkblue" | "dark" | "light" | undefined;
            barPosition?: "top" | "center" | "bottom" | "left" | "right" | undefined;
            absolute?: boolean | undefined;
            width?: number | undefined;
            title?: string | undefined;
        };
        styleVars: import("vue").ComputedRef<any>;
        handleCollapse: () => void;
        CaretBottom: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
        CaretTop: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
        CaretLeft: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
        CaretRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }, {
            props: any;
            ns: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string; /** 下侧抽屉的按钮位置 */
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            readonly size?: unknown;
            readonly color?: unknown;
        } & {} & {
            size?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown> | undefined;
            color?: string | undefined;
        }>, {}>> & Record<string, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "collapse"[], "collapse", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        hideBar?: unknown;
        direction?: unknown;
        modelValue?: unknown;
        theme?: unknown;
        barPosition?: unknown;
        absolute?: unknown;
        width?: unknown;
        title?: unknown;
    } & {
        hideBar: boolean;
        modelValue: boolean;
        absolute: boolean;
    } & {
        theme?: string | undefined;
        direction?: string | undefined;
        barPosition?: string | undefined;
        width?: number | undefined;
        title?: string | undefined;
    }> & {
        onCollapse?: ((...args: any[]) => any) | undefined;
    }, {
        hideBar: boolean;
        absolute: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    leftDrawer?: unknown;
    leftDrawerWidth?: unknown;
    leftDrawerAbsolute?: unknown;
    leftDrawerBarPosition?: unknown;
    leftDrawerTitle?: unknown;
    rightDrawer?: unknown;
    rightDrawerWidth?: unknown;
    rightDrawerAbsolute?: unknown;
    rightDrawerBarPosition?: unknown;
    rightDrawerTitle?: unknown;
    bottomDrawer?: unknown;
    bottomDrawerHeight?: unknown;
    bottomDrawerBarPosition?: unknown;
    bottomDrawerTitle?: unknown;
    topDrawer?: unknown;
    topDrawerHeight?: unknown;
    topDrawerBarPosition?: unknown;
    topDrawerTitle?: unknown;
    theme?: unknown;
} & {
    leftDrawer: boolean;
    leftDrawerAbsolute: boolean;
    rightDrawer: boolean;
    rightDrawerAbsolute: boolean;
    bottomDrawer: boolean;
    topDrawer: boolean;
} & {
    leftDrawerWidth?: number | undefined;
    leftDrawerBarPosition?: string | undefined;
    leftDrawerTitle?: string | undefined;
    rightDrawerWidth?: number | undefined;
    rightDrawerBarPosition?: string | undefined;
    rightDrawerTitle?: string | undefined;
    bottomDrawerHeight?: number | undefined;
    bottomDrawerBarPosition?: string | undefined;
    bottomDrawerTitle?: string | undefined;
    topDrawerHeight?: number | undefined;
    topDrawerBarPosition?: string | undefined;
    topDrawerTitle?: string | undefined;
    theme?: string | undefined;
}>, {
    leftDrawer: boolean;
    leftDrawerAbsolute: boolean;
    rightDrawer: boolean;
    rightDrawerAbsolute: boolean;
    bottomDrawer: boolean;
    topDrawer: boolean;
}>;
export default _sfc_main;
