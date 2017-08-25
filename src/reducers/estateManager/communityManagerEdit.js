import * as actions from '../../actions/estateManager/communityManagerEdit';
const initialState = {
    loading: false,
    data: [],
    parentList:[],
    treeData:[],
    options:[],
    info: '',
    uploadToken: '',
    show:false,
};
export default function index(state = initialState, action = {}) {
    switch (action.type) {
        case actions.GETLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETLIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.data.data.list,
            });
        case actions.GETLIST_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.STATUSCHANGE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.STATUSCHANGE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: action.data.data.list
            });
        case actions.STATUSCHANGE_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.GETAREA_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETAREA_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                options: action.data.data
            });
        case actions.GETAREA_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.GETSERVERLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETSERVERLIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                treeData: action.data.data
            });
        case actions.GETSERVERLIST_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });


        case actions.GETCOMPANYLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.GETCOMPANYLIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                parentList: action.data.data
            });
        case actions.GETCOMPANYLIST_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });


        case actions.GUPDATECOMMUNITY_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.UPDATECOMMUNITY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
            });
        case actions.UPDATECOMMUNITY_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });


         case actions.COMMUNITYSHOW_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case actions.COMMUNITYSHOW_SUCCESS:
            for(var i=0;i<action.data.data.service_list.length;i++){
                action.data.data.service_list[i]=action.data.data.service_list[i].service_id
            }
          if(action.data.data.logo_url==""){
            action.data.data.logo_url=[]
          }else {
            action.data.data.logo_url=[{
              uid: -1,
              name: 'logo.png',
              status: 'done',
              url:action.data.data.logo_url,
            }]
          }
            for(var i=0;i<action.data.data.img_list.length;i++){
                action.data.data.img_list[i].url=action.data.data.img_list[i].img_url;
                action.data.data.img_list[i].name="img"+i;
                action.data.data.img_list[i].status='done';
                action.data.data.img_list[i].uid=i-1;
                delete action.data.data.img_list[i].img_url;
            }
                return Object.assign({}, state, {
                    loading: false,
                    info: action.data.data,
                    show:action.data.data.comm_type==1?false:true,
                });

        case actions.COMMUNITYSHOW_FAILED:
            return Object.assign({}, state, {
                loading: false,
            });

            case actions.GETUPLOADTOKEN_REQUEST:
        			return Object.assign({}, state, {
        				loading: true
        			});
        		case actions.GETUPLOADTOKEN_SUCCESS:
        			return Object.assign({}, state, {
        				loading: false,
        				uploadToken: action.data.data
        			});
        		case actions.GETUPLOADTOKEN_FAILED:
        			return Object.assign({}, state, {
        				loading: false,
        			});

                                //显示隐藏小区选择
                                case actions.SHOW:
                                  return Object.assign({}, state, {
                                    show:true,
                                  });
                                case actions.HIDE:
                                  return Object.assign({}, state, {
                                    show: false,
                                  });

        default:
            return state;
    }
}
