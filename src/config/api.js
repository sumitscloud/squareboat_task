
const  url = 'https://jobs-api.squareboat.info/api/v1/';

export default (() => {
    return {
        'LOGIN' : url+ 'auth/login',
        'GET_POSTED_JOBS' : url+ 'recruiters/jobs',
        'GET_ONE_JOB_CANDIDATE' : url+ 'recruiters/jobs/'

    //   'REFRESH_TOKEN' : setting.api.url + '/user/auth/refresh_token/',
    //   'ADMIN_LOGIN': setting.api.url + 'user/auth/admin_login/',
    //   'VERIFY_OTP' : setting.api.url + 'user/auth/verify_otp/',
    //   'LOGOUT' : setting.api.url + 'user/auth/log_out/',
    //   'GET_USER_LIST' : setting.api.url + 'user/auth/admin_list_users/',
    //   'USER_ACTIVE_INACTIVE' : setting.api.url + 'user/auth/admin_active_inactive_user/',
    //   'DELETE_USER' : setting.api.url + 'user/auth/',
    //   'USER_UPDATE_URL' :setting.api.url + 'user/auth/',
    //   'ADMIN_ADD_USER' :setting.api.url + 'user/auth/admin_add_user/',
    //   'GET_VIEW_USER_DETAIL' : setting.api.url + 'user/auth/',
  
      
    }
  })()