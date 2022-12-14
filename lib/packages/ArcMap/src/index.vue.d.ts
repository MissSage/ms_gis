import MapView from "@arcgis/core/views/MapView";
declare const _sfc_main: import("vue").DefineComponent<{
    basemap: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: {
        basemap?: "satellite" | "hybrid" | "terrain" | "oceans" | "osm" | "dark-gray-vector" | "gray-vector" | "streets-vector" | "topo-vector" | "streets-night-vector" | "streets-relief-vector" | "streets-navigation-vector" | undefined;
    };
    refMap: import("vue").Ref<HTMLDivElement | undefined>;
    init: (options?: {
        center?: number[] | undefined;
        zoom?: number | undefined;
    } | undefined) => __esri.MapView;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    basemap?: unknown;
} & {} & {
    basemap?: string | undefined;
}>, {}>;
export default _sfc_main;
