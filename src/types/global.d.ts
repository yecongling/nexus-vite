/**
 * 定义ajax请求的相应结果
 */
export interface Response {
  // 这里的状态码需要与后端的状态码枚举匹配
  code: number;
  message: string;
  data: any;
  success: boolean;
}

/**
 * 定义基础选项类型
 */
export interface BasicOptions {
  label: string;
  value: string;
}


/**
 * 分页查询参数
 */
export interface PageQueryParams {
  /**
   * 当前页码
   */
  pageNum: number;

  /**
   * 每页显示数量
   */
  pageSize: number;
}