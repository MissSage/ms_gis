declare const _sfc_main: import("vue").DefineComponent<{
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
    emit: (e: "collapse", isCollapsed: boolean) => any;
    props: {
        /**
         * 隐藏边上的把手
         */
        hideBar?: boolean | undefined;
        /** 默认从左向右 */
        direction?: "rtl" | "ltr" | "btt" | "ttb" | undefined;
        /** 是否默认折叠 */
        modelValue: boolean;
        theme?: "darkblue" | "dark" | "light" | undefined;
        /** 按钮的位置，左右不支持left和right,同理，上下不支持top和bottom,默认center */
        barPosition?: "top" | "center" | "bottom" | "left" | "right" | undefined;
        /** 仅对左右有效 */
        absolute?: boolean | undefined;
        /** 设置抽屉宽度/高度，默认350,单位px, 对左右抽屉对应宽度，对上下抽屉则是对应高度 */
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
            e: (element?: string | undefined) => string;
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
export default _sfc_main;
