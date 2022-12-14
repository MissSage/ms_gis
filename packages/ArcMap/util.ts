import Graphic from '@arcgis/core/Graphic'
import Point from '@arcgis/core/geometry/Point'
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol'
import TextSymbol from '@arcgis/core/symbols/TextSymbol'
import { createVNode, render } from 'vue'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import IdentifyParameters from '@arcgis/core/rest/support/IdentifyParameters'
import * as identify from '@arcgis/core/rest/identify'
import Draw from '@arcgis/core/views/draw/Draw'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import * as query from '@arcgis/core/rest/query'
import Query from '@arcgis/core/rest/support/Query'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol'
import Color from '@arcgis/core/Color'
import Polygon from '@arcgis/core/geometry/Polygon'
import Polyline from '@arcgis/core/geometry/Polyline'
import Geometry from '@arcgis/core/geometry/Geometry'
import ArcSymbol from '@arcgis/core/symbols/Symbol'
import Extent from '@arcgis/core/geometry/Extent'
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine'
import * as geoprocessor from '@arcgis/core/rest/geoprocessor'
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import * as geometryService from '@arcgis/core/rest/geometryService'
import BufferParameters from '@arcgis/core/rest/support/BufferParameters'
import FindParameters from '@arcgis/core/rest/support/FindParameters'
import * as find from '@arcgis/core/rest/find'
import Layer from '@arcgis/core/layers/Layer'
import * as print from '@arcgis/core/rest/print'
import PrintTemplate from '@arcgis/core/rest/support/PrintTemplate'
import PrintParameters from '@arcgis/core/rest/support/PrintParameters'
import LinearUnit from '@arcgis/core/rest/support/LinearUnit'
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel'
import PopInfoTem from '../hooks/template/popWindow.vue'
import app from '@/main'
import store from '@/store'
import {
  getPipeSubLayerIdFromMianPipe,
  PipeStatistics
} from '@/api/mapservice/pipe'
import { queryLayerClassName } from '@/api/mapservice'

/**
 * 创建一个简单的标注
 * @param x
 * @param y
 * @param options
 * @returns
 */
export const createSimpleMarker = (
  x: number,
  y: number,
  options: {
    color?: string | number[]
    outLineColor?: string | number[]
    xOffset?: number
    yOffset?: number
    spatialReference?: any
    attributes?: any
  }
) => {
  //
  const point = new Point({
    x,
    y,
    spatialReference: options.spatialReference
  })
  const markSymbol = new SimpleMarkerSymbol({
    // url: options.picUrl,
    // height: options.picSize || 15,
    // width: options.picSize || 15,
    color: options.color || '#00ffff',
    xoffset: options.xOffset || 0,
    yoffset: options.yOffset || 0
  })

  const markGrapic = new Graphic({
    geometry: point,
    symbol: markSymbol,
    attributes: options.attributes
  })

  return markGrapic
}
/**
 * 创建一个图标标注
 * @param x
 * @param y
 * @param options
 * @returns
 */
export const createPictureMarker = (
  x: number,
  y: number,
  options: {
    picUrl: string
    picSize?: number | number[]
    // text?:string
    xOffset?: number
    yOffset?: number
    spatialReference?: any
    attributes?: any
  }
) => {
  //
  const point = new Point({
    x,
    y,
    spatialReference: options.spatialReference
  })
  const markSymbol = new PictureMarkerSymbol({
    url: options.picUrl,
    height:
      (options.picSize instanceof Array
        ? options.picSize[1]
        : options.picSize) || 15,
    width:
      (options.picSize instanceof Array
        ? options.picSize[0]
        : options.picSize) || 15,
    xoffset: options.xOffset || 0,
    yoffset: options.yOffset || 0
  })

  const markGrapic = new Graphic({
    geometry: point,
    symbol: markSymbol,
    attributes: options.attributes
  })

  return markGrapic
}
/**
 * 创建一个文本标注
 * @param x
 * @param y
 * @param options
 * @returns
 */
export const createTextMarker = (
  x: number,
  y: number,
  options: {
    text?: string
    font?: Record<string, any>
    xOffset?: number
    yOffset?: number
    spatialReference?: any
    attributes?: any
  }
) => {
  //
  const point = new Point({
    x,
    y,
    spatialReference: options.spatialReference
  })
  const textSymol = new TextSymbol({
    text: options.text,
    backgroundColor: [0, 0, 0, 0.1],
    xoffset: options.xOffset || 0,
    yoffset: options.yOffset || -15,
    color: '#fff',
    font: {
      size: 12,
      weight: 'bold',
      ...(options.font || {})
    }
  })

  const textGraphic = new Graphic({
    geometry: point,
    symbol: textSymol,
    attributes: options.attributes
  })
  return textGraphic
}
/**
 * 生成气泡内容
 * @param props 组件接收的props
 * @param close 关闭弹窗的方法
 * @returns
 */
export const _template = (props: any, close: (id: string) => void) => {
  const container = document.createElement('div')
  const vm = createVNode(PopInfoTem, props)
  vm.props && (vm.props.onClose = close)
  vm.appContext = app._context
  render(vm, container)
  return container.firstElementChild
}
/**
 * 初始化地图实例
 * @param el 指定地图容器
 * @param defaultCenter 默认地图中飞
 * @returns MapView
 */
export const initMap = (el?: any, defaultCenter?: number[], zoom?: number) => {
  // const basemap = new Basemap({
  //   baseLayers: [
  //     new VectorTileLayer({
  //       apiKey: 'AAPKbf4e22c18798464f9f15f46254975c13V9DFM0Tj5VyxUNjISsHJoWwb0OgwvhLNnh1HcRrP0-KYTPP3QWTys-xKqahU2Qac',
  //       portalItem: {
  //         id: '5f3c07155abe43eea3504d7db9d6d1f2'
  //         // id: '888486087427436f98243259d2c4ab18'
  //       },
  //       id: 'basemap_darkblue'
  //     })
  //     // Basemap.fromId('osm')
  //   ],
  //   title: 'basemap',
  //   id: 'basemap'

  // })
  const map = new Map({
    // satellite", "hybrid", "terrain", "oceans", "osm", "dark-gray-vector", "gray-vector", "streets-vector", "topo-vector", "streets-night-vector", "streets-relief-vector", "streets-navigation-vector"
    basemap: 'satellite'
  })
  const view = new MapView({
    container: el,
    map,
    center: defaultCenter || [117.09, 30.64],
    zoom: zoom || 5,
    highlightOptions: {
      fillOpacity: 0,
      haloOpacity: 0.7
    }
  })
  // 清除默认微件
  view.ui.remove('attribution')
  view.ui.remove('zoom')
  view.ui.padding = {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15
  }
  return view
}
/**
 * 绑定地图点击事件
 * @param mapView
 * @param callBack
 */
export const bindViewClick = (
  mapView?: MapView,
  callBack?: (res: any) => void
) => {
  const mapClick = mapView?.on('click', e => {
    mapView.hitTest(e).then(response => {
      // if (response.results[0]) {
      //   const graphic = response.results[0].graphic
      //   mapView.whenLayerView(graphic.layer).then((lyrView: any) => {
      callBack && callBack(response)
      //   })
      // }
    })
  })
  return mapClick
}
/**
 * 绑定地图点双击事件
 * @param mapView
 * @param callBack
 */
export const bindViewDblClick = (
  mapView: MapView,
  callBack: (res: any) => void
) => {
  mapView.on('double-click', e => {
    mapView.hitTest(e).then(response => {
      // if (response.results[0]) {
      //   const graphic = response.results[0].graphic
      //   mapView.whenLayerView(graphic.layer).then((lyrView: any) => {
      callBack(response)
      //   })
      // }
    })
  })
}
/**
 * 点击查询的参数
 * @param options
 * @returns
 */
export const initIdentifyParams = (options?: {
  tolerance?: number
  layerIds?: number[]
  layerOption?: 'top' | 'visible' | 'all' | 'popup'
  width?: number
  height?: number
  returnGeometry?: boolean
  geometry?: Geometry
  mapExtent?: Extent
}) => {
  return new IdentifyParameters({
    layerIds: [1, 2, 3, 4, 5],
    layerOption: 'all',
    tolerance: 1,
    returnGeometry: true,
    ...(options || {})
  })
}
/**
 * 执行点击查询
 * @param url 查询服务路径
 * @param params 查询参数
 * @returns
 */
export const excuteIdentify = (
  url: string,
  params: __esri.IdentifyParameters
) => {
  return identify.identify(url, params)
}
/**
 * 初始化绘画笔
 * @param view
 * @returns
 */
export const initDrawer = (view: MapView) => {
  return new Draw({ view })
}
/**
 * 查询layer,没有会自动添加
 * @param view
 * @param options
 */
export const getGraphicLayer = (
  view?: MapView,
  options?: {
    id?: string
    title?: string
  }
): GraphicsLayer | undefined => {
  if (options?.id) {
    let layer = view?.map.findLayerById(options.id) as GraphicsLayer
    if (!layer) {
      layer = new GraphicsLayer({
        ...(options || {})
      })
      view?.map.add(layer)
    }
    return layer
  }
}
export const getFeatureLayer = (
  view?: MapView,
  options?: {
    url?: string
    definitionExpression?: string
    outFields?: string[]
    id: string
    title?: string
  }
): FeatureLayer | undefined => {
  if (options?.id) {
    let layer = view?.map.findLayerById(options.id) as FeatureLayer
    if (!layer) {
      layer = new FeatureLayer({
        outFields: ['*'],
        spatialReference: view?.spatialReference,
        ...(options || {})
      })
      view?.map.add(layer)
    }
    return layer
  }
}
export const createFeatureLayer = (options: __esri.FeatureLayerProperties) => {
  return new FeatureLayer({
    outFields: ['*'],
    ...options
  })
}
export const applyEdits = (
  layerid: number,
  params: __esri.FeatureLayerApplyEditsEdits
) => {
  const editFeatureLayer = createFeatureLayer({
    url: window.SITE_CONFIG.gisPipeFeatureServiceFeatureServer + '/' + layerid
  })
  return editFeatureLayer.applyEdits(params)
}
export const getLayer = (
  view: MapView,
  options: {
    id?: string
    title?: string
    type?: 'MapImageLayer' | 'GraphicsLayer'
    url?: string
  }
): Layer | undefined => {
  if (options.id) {
    let layer = view.map.findLayerById(options.id)
    if (!layer) {
      if (options.type === 'GraphicsLayer') {
        layer = new GraphicsLayer({
          id: options.id,
          title: options.title
        })
      } else if (options.type === 'MapImageLayer') {
        layer = new MapImageLayer({
          url: options.url,
          id: options.id,
          title: options.title
        })
      }
      layer && view.map.add(layer)
    }
    return layer
  }
}
/**
 * 初始化Query的参数
 * @param options
 * @returns
 */
export const initQueryParams = (options?: {
  returnGeometry?: boolean
  outFields?: string[]
  objectIds?: number[]
  orderByFields?: string[]
  where?: string
  geometry?: Geometry
}) => {
  return new Query({
    returnGeometry: true,
    outFields: ['*'],
    ...(options || {})
  })
}
/**
 * 执行服务查询
 * @param url 查询路径
 * @param params 查询参数
 * @returns
 */
export const excuteQuery = (url: string, params?: Query) => {
  params = params || initQueryParams()
  return query.executeQueryJSON(url, params)
}
/**
 * 执行服务查询(查询id数组)
 * @param url 查询路径
 * @param params 查询参数
 * @returns
 */
export const excuteQueryForIds = (url: string, params?: Query) => {
  params = params || initQueryParams()
  return query.executeForIds(url, params)
}
/**
 * 执行查询服务(查询数量)
 * @param url
 * @param params
 * @returns
 */
export const excuteQueryForCount = (url: string, params?: Query) => {
  params = params || initQueryParams()
  return query.executeForCount(url, params)
}
export const queryBufferPolygon = async (params: BufferParameters) => {
  const result = await geometryService.buffer(
    window.SITE_CONFIG.gisGeometryService,
    params
  )
  return result
}
export const initFindParams = (options?: {
  layerIds?: number[]
  searchFields?: string[]
  returnGeometry?: boolean
  searchText?: string
  contains: boolean
}) => {
  return new FindParameters({
    ...options
  })
}
export const excuteFind = (url, params?: FindParameters) => {
  params = params || initFindParams()
  return find.find(url, params)
}
export const initBufferParams = (options: {
  bufferSpatialReference?: any
  distances?: number[]
  geometries?: Geometry[]
  outSpatialReference?: any
  geodesic?: boolean
  unit?: 'feet' | 'kilometers' | 'meters' | 'miles' | 'nautical-miles' | 'yards'
  unionResults?: boolean
}) => {
  return new BufferParameters({
    ...options
  })
}
/**
 * 生成symbol
 * @param type 类型
 * @param options 可选项
 * @returns
 */
export const setSymbol = (
  type:
    | 'extent'
    | 'point'
    | 'polyline'
    | 'polygon'
    | 'multipoint'
    | 'mesh'
    | 'text',
  options?: {
    size?: number
    style?: any
    color?: string | number[] | Color
    width?: number
    outlineColor?: string | number[]
    outlineWidth?: number
    outlineStyle?: any
    text?: string
    textColor?: string | number[] | Color
    xOffset?: number
    yOffset?: number
  }
) => {
  switch (type) {
    case 'polyline':
      return new SimpleLineSymbol({
        color:
          options?.color instanceof Color
            ? options.color
            : new Color(options?.color || '#00ffff'),
        style: options?.style || 'solid', // 线的样式 dash|dash-dot|solid等
        width: options?.width || 2
      })

    case 'polygon':
      return new SimpleFillSymbol({
        color:
          options?.color instanceof Color
            ? options.color
            : new Color(options?.color || [0, 0, 0, 0.1]),
        outline: {
          style: options?.outlineStyle || 'solid',
          color: new Color(options?.outlineColor || '#00ffff'),
          width: options?.outlineWidth || 2
        },
        style: options?.style || 'solid'
      })
    case 'point':
      return new SimpleMarkerSymbol({
        size: options?.size || 12,
        color:
          options?.color instanceof Color
            ? options.color
            : new Color(options?.color || '#00ffff'),
        style: options?.style || 'circle', // 点样式solid\cross\square|diamond|circle|x
        outline: {
          color: new Color(options?.outlineColor || '#00ffff'),
          width: options?.outlineWidth || 0.2
        }
      })
    case 'text':
      return new TextSymbol({
        text: options?.text,
        backgroundColor:
          options?.color instanceof Color
            ? options.color
            : options?.color || [0, 0, 0, 0.1],
        xoffset: options?.xOffset || 0,
        yoffset: options?.yOffset === undefined ? -15 : options.yOffset,
        color: options?.textColor || '#fff',
        font: {
          size: 12,
          weight: 'bold'
        }
      })
    default:
      return new SimpleMarkerSymbol({
        color: new Color(options?.color || '#00ffff'),
        style: 'diamond', // 点样式solid\cross\square|diamond|circle|x
        outline: {
          color: new Color(options?.outlineColor || '#00ffff'),
          width: options?.outlineWidth || 0.2
        }
      })
  }
}
/**
 * 生成矩形
 * @param vertices 包含两个对角坐标的数组
 * @param spatialReference 地图的坐标系
 * @returns
 */
export const createRect = (vertices?: number[][], spatialReference?: any) => {
  if (vertices?.length !== 2) return
  const rect = new Polygon({
    rings: [
      [
        [vertices[0][0], vertices[0][1]],
        [vertices[1][0], vertices[0][1]],
        [vertices[1][0], vertices[1][1]],
        [vertices[0][0], vertices[1][1]]
      ]
    ],
    spatialReference
  })
  return rect
}
/**
 * 生成Graphic
 * @param options 配置项
 * @returns
 */
export const createGraphic = (options: {
  geometry?: Geometry
  symbol?: ArcSymbol
  attributes?: any
}) => {
  const graphic = new Graphic(options)
  return graphic
}
/**
 * 缩放到指定范围
 * @param view 地图视图对象
 * @param extent 指定的范围
 * @param scale 对指定的范围进行缩放
 */
export const extentTo = (view?: MapView, extent?: any, fit?: boolean) => {
  let xmin: number = extent?.xmin || 0
  let xmax: number = extent?.xmax || 0
  let ymin: number = extent?.ymin || 0
  let ymax: number = extent?.ymax || 0
  if (fit) {
    const width = xmax - xmin
    const height = ymax - ymin
    xmin -= width / 2
    xmax += width / 2
    ymin -= height / 2
    ymax += height / 2
  }
  return view?.goTo(
    new Extent({
      ...{ xmax, ymax, xmin, ymin },
      spatialReference: view.spatialReference
    })
  )
}
/**
 * 高亮要素
 * @param feature
 */
export const highlightFeature = (feature: Graphic) => {
  const oldcolor = feature.symbol.color
  let index = 0
  const timer = setInterval(() => {
    feature.symbol = setSymbol(feature.geometry.type, {
      color: index % 2 === 0 ? '#ff0000' : oldcolor
    })
    index++
    if (index === 6) {
      clearInterval(timer)
    }
  }, 300)
}
/**
 * 定位并缩放到到要素并闪烁高亮
 * @param view
 * @param target 要素
 * @param options 更多选项
 * @returns
 */
export const gotoAndHighLight = async (
  view?: MapView,
  target?: Graphic,
  options?: {
    /** 仅当要素没有extent属性时生效，即点要素，默认24，值 1-24，值大，地图放大 */
    zoom?: number
    duration?: number
    avoidHighlight?: boolean
    /** 缩放倍数， 默认2，表示在屏幕区域内，目标的四周的区域宽/高是目标的两倍， 值 为2 时，宽/高为屏幕的1/5 */
    ratio?: number
  }
) => {
  if (!target || !view) return
  const extent = target?.geometry.extent
  const screenRatio = view.extent.width / view.extent.height
  if (extent) {
    let xmin: number = extent?.xmin || 0
    let xmax: number = extent?.xmax || 0
    let ymin: number = extent?.ymin || 0
    let ymax: number = extent?.ymax || 0
    let width = xmax - xmin
    let height = ymax - ymin
    if (width > height * screenRatio) {
      height = width / screenRatio
    } else {
      width = height * screenRatio
    }
    xmin -= width * (options?.ratio || 2)
    xmax += width * (options?.ratio || 2)
    ymin -= height * (options?.ratio || 2)
    ymax += height * (options?.ratio || 2)
    await view?.goTo(
      new Extent({
        spatialReference: extent.spatialReference,
        xmin,
        xmax,
        ymin,
        ymax
      }),
      { duration: 500 }
    )
  } else {
    await view?.goTo(
      { zoom: options?.zoom || 19, target: target?.geometry },
      { duration: options?.duration || 500 }
    )
  }
  if (options?.avoidHighlight) return
  highlightFeature(target)
}
/**
 * 获取要素的中心点
 */
export const getGeometryCenter = (geometry?: Point | Polygon | Polyline) => {
  if (!geometry) return
  if (geometry.type === 'point') {
    return [geometry.x, geometry.y]
  }
  if (geometry.extent) {
    const result = [
      (geometry.extent.xmax + geometry.extent.xmin) / 2,
      (geometry.extent.ymax + geometry.extent.ymin) / 2
    ]
    // 当为多边形时，点要在线上
    if (geometry.type === 'polyline') {
      const point = new Point({
        x: result[0],
        y: result[1],
        spatialReference: geometry.spatialReference
      })
      const nearstPoint = getNeerestPoint(geometry, point)
      if (!nearstPoint) return
      return [nearstPoint.x, nearstPoint.y]
    }
    return result
  }
}
/**
 * 获取要素的中心点
 */
export const getGeometryCenterPoint = (
  geometry?: any
): __esri.Point | undefined => {
  if (!geometry) return
  if (geometry.type === 'point') {
    return geometry
  }
  if (geometry.extent) {
    const result = [
      (geometry.extent.xmax + geometry.extent.xmin) / 2,
      (geometry.extent.ymax + geometry.extent.ymin) / 2
    ]
    // 当为多边形时，点要在线上
    if (geometry.type === 'polyline') {
      const point = new Point({
        x: result[0],
        y: result[1],
        spatialReference: geometry.spatialReference
      })
      const nearstPoint = getNeerestPoint(geometry, point)
      return nearstPoint
    }
  }
}
/**
 * 获取指定几何体上距离指定点最近的坐标
 * @param geometry 指定的几何体
 * @param point 指定点
 * @returns
 */
export const getNeerestPoint = (geometry?: Geometry, point?: any) => {
  if (!geometry || !point) return
  return geometryEngine.nearestCoordinate(geometry, point).coordinate
}
/**
 * 判断两个要素是否相交
 * @param geometry1
 * @param geometry2
 * @returns
 */
export const intersects = (geometry1: Geometry, geometry2: Geometry) => {
  if (!geometry1 || !geometry2) return false
  return geometryEngine.intersects(geometry1, geometry2)
}
/**
 * 向焊管GP服务发送任务
 * @param layerdbname 图层字段名
 * @param oid 分析的OBJECTID
 * @returns Promise<Jobinfo>
 */
export const submitBurstAnalysGPJob = (layerdbname, oid) => {
  return geoprocessor.submitJob(window.SITE_CONFIG.gisBurstGPService, {
    pipefeatureclassname: layerdbname,
    pipeobjectid: oid,
    bysource: true,
    usertoken: store.gis.gToken
  })
}
/**
 * 向关阀服务发送任务
 * @param layerdbname 图层字段名
 * @param oids 分析的OBJECTID数组
 * @returns Promise<Jobinfo>
 */
export const submitShutValvesGPJob = (layerdbname: string, params: any) => {
  return geoprocessor.submitJob(
    window.SITE_CONFIG.gisShutValveAnalysGPService,
    {
      ...(params || {})
    }
  )
}
/**
 * 向拓展关阀服务发送任务
 * @param layerdbname 图层字段名
 * @param oids 分析的OBJECTID数组
 * @returns Promise<Jobinfo>
 */
export const submitExtendShutValvesGPJob = (
  layerdbname: string,
  params: any
) => {
  return geoprocessor.submitJob(
    window.SITE_CONFIG.gisExtendShutValveAnalysGPService,
    {
      ...(params || {})
    }
  )
}
export const submitConnectAnalysGPJob = (
  layerdbname: string,
  oid: any,
  applystop?: boolean
) => {
  return geoprocessor.submitJob(window.SITE_CONFIG.gisConnectGPService, {
    pipefeatureclassname: layerdbname,
    pipeobjectid: oid,
    applystop,
    usertoken: store.gis.gToken,
    versioned: false
  })
}
export const submitGPJob = (url: string, params: any) => {
  return geoprocessor.submitJob(url, params)
}
export const excuteGPJob = (url: string, featureSet: any[], options: any) => {
  const params = {
    Input_Observation_Point: featureSet,
    Viewshed_Distance: new LinearUnit({
      distance: 5,
      units: 'meters'
    })
  }
  return geoprocessor.execute(url, params, options)
}
/**
 * 获取管线图层最小图层号
 * @param view 地图视图
 * @returns number
 */
export const getPipeMapLayerMinIndex = (view?: MapView) => {
  let layerIndex = 100
  view?.map.layers.forEach((layer: any, index) => {
    if (layer.id === '"pipelayer"') {
      if (layerIndex > index) layerIndex = index
    }
  })
  return layerIndex
}
/**
 *  设置地图dom的cursor
 * @param type
 */
export const setMapCursor = (type: string, elId?: string) => {
  const mapDiv = document.getElementById(elId || 'viewDiv')
  mapDiv && (mapDiv.style.cursor = type)
}
/**
 * 获取图层子数组
 * @param view
 * @param pipeLayerId
 * @param visible 是否只获取可见/不可见的子图层id
 */
export const getSubLayers = (
  view?: MapView,
  visible?: boolean,
  pipeLayerId?: string
) => {
  const pipeLayer = view?.map.findLayerById(
    pipeLayerId || 'pipelayer'
  ) as MapImageLayer
  const subLayers: any[] = []
  pipeLayer.sublayers
    .filter(item => {
      if (visible === undefined) return true
      return item.visible === visible
    })
    .map(item => {
      subLayers.push(item)
    })
  return subLayers
}
/**
 * 获取图层子id数组
 * @param view
 * @param pipeLayerId
 * @param visible 是否只获取可见/不可见的子图层id
 */
export const getSubLayerIds = (
  view?: MapView,
  visible?: boolean,
  pipeLayerId?: string,
  layername?: string
) => {
  const pipeLayer = view?.map.findLayerById(
    pipeLayerId || 'pipelayer'
  ) as MapImageLayer
  const subLayerIds: number[] = []
  pipeLayer.sublayers
    .filter(item => {
      if (visible === undefined) {
        return layername ? item.title === layername : true
      }
      return (
        item.visible === visible
        && (layername ? item.title === layername : true)
      )
    })
    .map(item => {
      subLayerIds.push(item.id)
    })
  return subLayerIds
}
/**
 * 查询指定图层名对应的索引
 * @param layername
 * @returns index 不存在则返回-1
 */
export const querySourceLayerIndex = async layername => {
  const res = await getPipeSubLayerIdFromMianPipe()
  const data = res.data?.layers || []
  // 获取图层信息，查找指定图层的id
  const index = data.findIndex((o: any) => {
    return o.name === layername
  })
  return index
}

/**
 * (方法说明)获取当前页的objectid集合
 * @method (方法名)
 * @for (所属类名)
 * @param {(参数类型)} (参数名) (参数说明)
 * @return {(返回值类型)} (返回值说明)
 */
export const getCurrentPageOIDs = (
  alloids: number[],
  pageindex: number,
  pagesize: number
): number[] => {
  const subobjectids: any[] = []
  const total = alloids.length
  if (total === 0) {
    return []
  }
  const totalpage = Math.ceil(total / pagesize)
  if (pageindex <= totalpage) {
    const startindex = (pageindex - 1) * pagesize
    const endindex = pageindex * pagesize
    for (let i = startindex; i < total && i < endindex; i++) {
      subobjectids.push(alloids[i])
    }
  }
  return subobjectids
}

export const createPolyline = (
  vertices?: any[],
  spatialReference?: any,
  symbol?: ArcSymbol,
  attributes?: any
) => {
  if (vertices?.length && vertices.length < 2) return
  const line = createGraphic({
    geometry: new Polyline({
      paths: vertices,
      spatialReference
    }),
    symbol: symbol || setSymbol('polyline'),
    attributes
  })
  return line
}
export const createPoint = (
  point?: any[],
  spatialReference?: any,
  symbol?: ArcSymbol
) => {
  if (!point?.length) return
  return createGraphic({
    geometry: new Point({ x: point[0][0], y: point[0][1], spatialReference }),
    symbol: symbol || setSymbol('point')
  })
}
export const createPolygon = (
  vertices?: any[],
  spatialReference?: any,
  symbol?: ArcSymbol,
  attributes?: any
) => {
  if (!vertices?.length || vertices.length < 3) return
  return createGraphic({
    geometry: new Polygon({
      rings: vertices,
      spatialReference
    }),
    symbol: symbol || setSymbol('polygon'),
    attributes
  })
}
/**
 * 绘制椭圆
 * @param vertices
 * @param spatialReference
 * @param symbol
 * @param attributes
 * @returns
 */
export const createEllipse = (
  vertices?: any[],
  spatialReference?: any,
  symbol?: ArcSymbol,
  attributes?: any
) => {
  if (vertices?.length !== 2) return
  const ring: number[][] = []
  const maxX = Math.max(vertices[0][0], vertices[1][0])
  const maxY = Math.max(vertices[0][1], vertices[1][1])
  const minX = Math.min(vertices[0][0], vertices[1][0])
  const minY = Math.min(vertices[0][1], vertices[1][1])
  const width = maxX - minX
  const height = maxY - minY
  const cX = maxX - width / 2
  const cY = maxY - height / 2
  for (let i = 0; i < 360; i++) {
    const t = (i * Math.PI) / 180
    const x = cX - (width / 2) * Math.cos(t)
    const y = cY + (height / 2) * Math.sin(t)
    ring.push([x, y])
  }
  ring.push(ring[0])
  const graphic = createPolygon(
    ring,
    spatialReference,
    symbol
      || setSymbol('polygon', {
        outlineWidth: 1
      }),
    attributes
  )
  return graphic
}
/**
 * 绘制矩形
 * @param vertices
 * @param spatialReference
 * @param symbol
 * @param attributes
 * @returns
 */
export const createRectGraphic = (
  vertices?: any[],
  spatialReference?: any,
  symbol?: ArcSymbol,
  attributes?: any
) => {
  const rect = createRect(vertices, spatialReference)
  return (
    rect
    && createGraphic({
      geometry: rect,
      symbol:
        symbol
        || (setSymbol('polygon', {
          outlineColor: '#ff0000',
          outlineWidth: 1
        }) as any),
      attributes
    })
  )
}
/**
 * 创建一个文本框
 * @param screenpoint
 * @param telport
 * @returns
 */
export const createTextDraw = (screenpoint?: any, telport?: string) => {
  telport = telport || 'body'
  const container = document.querySelector(telport)
  const radom = moment().valueOf().toFixed(0)
  const textarea = document.createElement('textarea')
  textarea.id = radom
  textarea.cols = 27
  textarea.rows = 3
  textarea.style.position = 'absolute'
  textarea.style.top = (screenpoint?.y || -1000) + 'px'
  textarea.style.left = (screenpoint?.x || -1000) + 'px'
  textarea.style.width = '250px'
  textarea.style.height = '60px'
  textarea.style.backgroundColor = 'transparent'
  textarea.style.borderWidth = '3px'
  textarea.style.borderColor = 'red'
  textarea.style.borderStyle = 'solid'
  textarea.style.fontSize = '18px'
  textarea.style.color = '#fff'
  container?.append(
    textarea
    //   `<textarea id="${radom}"
    //  class="ui-widget-content textlabel" cols=27 rows=3
    //  style='position: absolute;top: "${screenpoint.y}px; left: ${screenpoint.x}px;
    //  z-index: 1;width:250px;
    //  height: 60px;background:transparent;
    //  border: solid;border-width: 3px;border-color: red;font-size:18px; color:#000;'></textarea >`
  )
  // const textarea = document.getElementById(radom)
  textarea?.focus()
  return textarea
}
export const createGeometry = (
  type: 'point' | 'polyline' | 'polygon',
  vertices?: any[],
  spatialReference?: any
) => {
  if (!vertices) return
  switch (type) {
    case 'point':
      return new Point({
        x: vertices[0][0],
        y: vertices[0][1],
        spatialReference
      })
    case 'polygon':
      return new Polygon({
        rings: vertices,
        spatialReference
      })
    case 'polyline':
      return new Polyline({
        paths: vertices,
        spatialReference
      })
    default:
      return new Point({
        x: vertices[0][0],
        y: vertices[0][1],
        spatialReference
      })
  }
}
/**
 * 计算面积
 * @param vertices
 * @param unit
 * @param spatialReference
 * @returns
 */
export const calcArea = (
  vertices: number[][],
  unit?: any,
  spatialReference?: any
): number => {
  const geometry: any = createGeometry('polygon', vertices, spatialReference)
  if (!geometry) return 0
  return geometryEngine.planarArea(geometry, unit || 'square-meters') || 0
}

/**
 * 计算长度
 * @param vertices
 * @param unit
 * @param spatialReference
 * @returns
 */
export const calcLength = (
  vertices: number[][],
  unit?:
    | 'meters'
    | 'feet'
    | 'kilometers'
    | 'miles'
    | 'nautical-miles'
    | 'yards'
    | number,
  spatialReference?: any
): number => {
  const geometry: any = createGeometry('polyline', vertices, spatialReference)
  if (!geometry) return 0
  return geometryEngine.planarLength(geometry, unit || 'meters')
}
/**
 * 计算夹角角度
 * @param vertices 长度必须是三个，角度以第二个点为顶点计算
 * @param unit
 * @param spatialReference
 * @returns
 */
export const calcAngle = (vertices: number[][]): number => {
  // 只当有三个点时才能计算结果
  if (vertices?.length !== 3) return 0
  // 起点到中间点的向量
  const point1: number[] = []
  point1.push(vertices[0][0] - vertices[1][0])
  point1.push(vertices[0][1] - vertices[1][1])
  // 终点到中间点的向量
  const point2: number[] = []
  point2.push(vertices[2][0] - vertices[1][0])
  point2.push(vertices[2][1] - vertices[1][1])
  let result: number
  if (point1[0] * point2[1] === point1[1] * point2[0]) {
    result = 180
  } else {
    // 两向量的点乘
    const pointMultiply: number = point1[0] * point2[0] + point1[1] * point2[1]
    // 求出夹角的弧度
    const angle = Math.acos(
      pointMultiply
        / Math.sqrt(point1[0] ** 2 + point1[1] ** 2)
        / Math.sqrt(point2[0] ** 2 + point2[1] ** 2)
    )
    // 转换为弧度
    result = (angle * 180) / Math.PI
  }
  return result
}
/**
 * 通过线的长度和与y轴的弧度来计算x、y方向的长度
 * @param length 长度
 * @param deg 弧度
 * @return {deltX:number,deltY: number}
 */
export const calcDeltaXY = (length: number, deg: number) => {
  const angle = (deg * Math.PI) / 180 // 转换成角度
  return {
    x: length * Math.sin(angle),
    y: length * Math.cos(angle)
  }
}
/**
 * 通过extent计算scale
 * @param extent
 * @returns
 */
export const getScaleOnExtent = (extent?: Extent) => {
  if (!extent) return
  const dx = extent.width
  const dy = extent.height
  const length = Math.max(dx, dy)
  const radio = 1 // 180 / (Math.PI * 6378137);//实际距离换算到地图距离的参数 度/米
  // const scale = length / radio / 0.5
  const scale = length / radio
  return scale
}

/**
 * 执行打印任务
 * @param view
 * @param template 打印模板
 * @returns
 */
export const excutePrintTask = (view?: MapView, template?: PrintTemplate) => {
  if (!view || !template) {
    console.log('未传递参数')
  }
  const url = window.SITE_CONFIG.gisPrintingToolsGPService + '/Export%20Web%20Map%20Task'
  const params = new PrintParameters({
    view,
    template,
    outSpatialReference: view?.spatialReference
  })
  return print.execute(decodeURI(url), params)
}
/**
 * 获取管线图层Option
 * @param view
 * @returns
 */
export const getPipeLineLayerOption = async (view?: MapView) => {
  if (!view) return []
  const pipeLayerOption: NormalOption[] = []
  const sublayers = getSubLayerIds(view)
  const layersres = await queryLayerClassName(sublayers)
  const layers = layersres.data?.result?.rows || []
  layers.map(item => {
    if (
      item.geometrytype === 'esriGeometryPolyline'
      || item.layername.indexOf('立管') > -1
    ) {
      pipeLayerOption?.push({
        label: item.layername,
        value: item.layername,
        id: item.layerid,
        data: item
      })
    }
  })
  return pipeLayerOption
}
/**
 * 获取管网图层下拉框选项
 * @param view
 * @returns
 */
export const getPipeOptions = async (view?: MapView) => {
  if (!view) return []
  const sublayers = getSubLayerIds(view)
  const layersres = await queryLayerClassName(sublayers)
  const layers = layersres.data?.result?.rows || []
  return layers.map(item => {
    return {
      label: item.layername,
      value: item.layerid,
      id: item.layerid,
      data: item
    }
  })
}
/**
 * 统计管线
 * @param type 统计类型
 * @param params 参数
 * @returns 返回统计结果数组
 */
export const staticPipe = async (
  type: 'count' | 'length',
  params: {
    group_fields?: string[]
    where?: string
    geometry?: Geometry
    layerIds?: any[]
  }
): Promise<any[]> => {
  // 查询数量
  const res = await PipeStatistics({
    usertoken: store.gis.gToken,
    layerids: JSON.stringify(params.layerIds || []),
    group_fields: JSON.stringify(params.group_fields || []),
    statistic_field: type === 'count' ? 'OBJECTID' : 'SHAPE.Len',
    statistic_type: type === 'count' ? '1' : '2',
    where: params.where || '1=1',
    geometry: params.geometry,
    f: 'pjson'
  })
  return res.data?.result?.rows || []
}

/**
 * 查询详情指定图层的所有oid
 * @param layerIds 要查询的所有图层id
 * @param index 开始查询的图层id的索引,默认0
 *
 * @param queryParams 查询的参数
 * @returns
 */
export const getLayerOids = async (
  layerIds?: any[],
  layerInfos?: any[],
  queryParams?: { geometry?: Geometry; where?: string }
) => {
  if (!layerIds?.length) return []
  if (!layerInfos?.length) {
    const res = await queryLayerClassName(layerIds)
    layerInfos = res.data?.result?.rows || []
  }
  const tabs: any[] = []
  const getTab = async (index: number) => {
    if (index >= layerIds.length) return
    try {
      const id = layerIds[index]
      // 图层id小于0则表示未找到此图层，直接进行下一个循环
      if (id < 0) {
        await getTab(++index)
        return
      }
      const tab = layerInfos?.find(item => item.layerid === id).layername
      const oidUrl = window.SITE_CONFIG.gisPipeDataService
      const alloids = await excuteQueryForIds(
        `${oidUrl}/${id}`,
        initQueryParams({
          orderByFields: ['OBJECTID asc'],
          ...(queryParams || {})
        })
      )
      tabs.push({
        label: tab + '(' + (alloids?.length || 0) + ')',
        name: tab,
        data: alloids || []
      })

      await getTab(++index)
    } catch (error) {
      console.log('发生错误，停止递归')
    }
  }
  await getTab(0)
  return tabs
}
/**
 * 初始化画笔
 * @param view
 * @param graphicsLayer
 * @param options
 * @returns
 */
export const initSketch = (
  view?: MapView,
  graphicsLayer?: GraphicsLayer,
  callBack?: (graphic: Graphic) => any
) => {
  const sketch = new SketchViewModel({
    view,
    layer: graphicsLayer,
    polygonSymbol: setSymbol('polygon') as any,
    polylineSymbol: setSymbol('polyline') as any,
    pointSymbol: setSymbol('point') as any
  })
  const createHandler = sketch?.on('create', result => {
    if (result.state === 'complete') {
      callBack && callBack(result.graphic)
    }
  })
  const updateHandler = sketch?.on('update', result => {
    if (result.state === 'complete') {
      callBack && callBack(result.graphics[0])
    }
  })
  return {
    sketch,
    createHandler,
    updateHandler
  }
}
/**
 * 把rbga字符串转换成数组
 * @param rgba 要转换的值
 * @param defaultVals 默认值
 * @returns
 */
export const RgbaToArr = (
  rgba?: string,
  defaultVals?: number[]
): number[] | undefined => {
  if (!rgba) return defaultVals
  const val: any = rgba?.match(/(\d(\.\d+)?)+/g)
  return val || defaultVals
}
/**
 * 判断两要素是否要同
 */
export const Equals = (geometry1: Geometry, geometry2: Geometry) => {
  return geometryEngine.equals(geometry1, geometry2)
}
export const refreshPipeLayer = (view?: __esri.MapView, layerId?: string) => {
  const pipelayer = view?.map.findLayerById(
    layerId || 'pipelayer'
  ) as __esri.MapImageLayer
  pipelayer && pipelayer.refresh()
}
