/**
 * 获取指定元素的clientWidth/clientHeight
 * @param type
 * @param dom 指定元素，default = body
 * @param percent 指定百分比值：0-100
 * @returns
 */
export declare const client: (type: 'width' | 'height', dom?: string | HTMLElement | undefined, percent?: number | undefined) => number;
