import { HttpRequest } from '@/utils/request';

/**
 * 菜单相关接口枚举
 */
enum CommonApi {
  // 根据token获取菜单（多用于框架上根据角色获取菜单那种）
  getMenuListByRoleId = '/system/menu/getMenusByRole',
  /**
   * 退出登录
   */
  logout = '/logout',

  /**
   * 刷新token
   */
  refreshToken = '/refreshToken',
}

/**
 * 菜单管理服务接口
 */
interface ICommonService {
  /**
   * 根据角色获取菜单
   * @param roleId 角色ID
   * @returns 菜单列表
   */
  getMenuListByRoleId(roleId: string, token?: string): Promise<any[]>;

  /**
   * 用户退出登录
   * @param token 用户token
   */
  logout(token: string): Promise<boolean>;

  /**
   * 刷新token
   * @param refreshToken 刷新token
   */
  refreshToken(refreshToken: string): Promise<string>;
}

/**
 * 菜单管理服务实现
 */
export const commonService: ICommonService = {
  /**
   * 根据角色获取菜单
   * @param roleId 角色ID
   * @returns 菜单列表
   */
  getMenuListByRoleId(roleId: string, token?: string): Promise<any[]> {
    return HttpRequest.get(
      {
        url: CommonApi.getMenuListByRoleId,
        params: { roleId },
      },
      { successMessageMode: 'none', token },
    );
  },

  /**
   * 用户退出登录
   * @param token 用户token
   */
  logout(token: string): Promise<boolean> {
    return HttpRequest.post({ url: CommonApi.logout, params: { token } });
  },

  /**
   * 刷新token
   * @param refreshToken 刷新token
   */
  refreshToken(refreshToken: string): Promise<string> {
    return HttpRequest.post(
      {
        url: CommonApi.refreshToken,
        data: { refreshToken },
      },
      { successMessageMode: 'none', skipAuthInterceptor: true },
    );
  },
};
