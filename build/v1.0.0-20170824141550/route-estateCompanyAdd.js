webpackJsonp([3],{1268:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(92),p=n(c),d=a(296),m=a(1269),f=l(m),h=a(375),g=a(371),b=h.Select.Option,y=h.Form.Item,_=h.Radio.Group,E=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={submitLoading:!1,disabled:!0,newID:"",isUpload:!0,previewVisible:!1,previewImage:""},a.props.dispatch(f.companyParent({status:1})),a.props.dispatch(f.mccodeList({})),a}return s(t,e),o(t,[{key:"handlePreview",value:function(e){this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}},{key:"handleCancel",value:function(){this.setState({previewVisible:!1})}},{key:"handImgChange",value:function(e){e.fileList.length?this.setState({isUpload:!1}):this.setState({isUpload:!0}),"error"==e.file.status&&h.message.error("很遗憾...这次上传失败了。"),void 0!=e.file.response&&this.setState({business_img:e.file.response.data.filepath,business_img_local:e.file.response.data.localPath})}},{key:"normFile",value:function(e){return Array.isArray(e)?e:e&&e.fileList}},{key:"beforeUpload",value:function(e){var t="image/jpeg"===e.type,a="image/png"===e.type,l="image/jpg"===e.type;if(!l&&!t&&!a)return h.message.error("只能上传.jpeg,.jpg,.png图片"),!1;var n=e.size/1024/1024<2;if(!n)return h.message.error("请上传小于 2MB 的图片!"),!1;var r=(new Date).getTime(),i=e.type.split("/");this.setState({name:"zhihuishequ_text/"+r+"."+i[1],files:e})}},{key:"handleSubmit",value:function(e){var t=this;this.props.form.validateFields(function(e,a){e||t.props.dispatch(f.companyUpdate({alipay_account:a.alipay_account,link_man:a.link_man,link_phone:a.link_phone,login_name:a.login_name,login_phone:a.login_phone,property_name:a.property_name,status:a.status,email:a.email,business_img:t.state.business_img,business_img_local:t.state.business_img_local,business_license:a.business_license,mcc_code:a.mcc_code},function(){h.message.success("新增成功！"),setTimeout(function(){location.href="#/estateCompanyManager"},1e3)}))})}},{key:"handleBack",value:function(e){history.go(-1)}},{key:"render",value:function(){var e=this.props.form,t=e.getFieldDecorator,a=(e.initialValue,{labelCol:{span:3},wrapperCol:{span:6}}),l=p.default.createElement("div",null,p.default.createElement(h.Icon,{type:"plus"}),p.default.createElement("div",{className:"ant-upload-text"},"选择图片")),n=this.props.estateCompanyAdd,r=(n.info,n.parentList,n.uploadToken,n.category);return p.default.createElement("div",{className:"page-content"},p.default.createElement(h.Breadcrumb,{separator:"/"},p.default.createElement(h.Breadcrumb.Item,null,p.default.createElement("a",{href:"#/serveManager"},"物业管理")),p.default.createElement(h.Breadcrumb.Item,null,p.default.createElement("a",{href:"#/estateCompanyManager"},"企业管理")),p.default.createElement(h.Breadcrumb.Item,null,"新增企业")),p.default.createElement("section",{className:"section"},p.default.createElement(h.Form,null,p.default.createElement(y,u({label:"企业名称"},a,{hasFeedback:!0}),t("property_name",{rules:[{type:"string",pattern:/^[\u2E80-\u9FFF]+$/,required:!0,message:"请输入20以内文字"}]})(p.default.createElement(h.Input,{maxLength:20,placeholder:"请输入企业名称"}))),p.default.createElement(y,u({label:"经营类目"},a),t("mcc_code",{rules:[{required:!0,message:"请选择小区类型"}]})(p.default.createElement(h.Select,{placeholder:"请选择小区类型"},r.map(function(e,t){return p.default.createElement(b,{key:t,value:e.key},e.value)})))),p.default.createElement(y,u({label:"营业执照号"},a,{hasFeedback:!0}),t("business_license",{rules:[{type:"string",pattern:/^\d{16}$/,required:!0,message:"请输入16位执照号"}]})(p.default.createElement(h.Input,{maxLength:16,placeholder:"请输入营业执照号"}))),p.default.createElement(y,u({},a,{label:"企业执照图片"}),t("business_img",{rules:[{required:!0,message:"请上传企业执照图片"}],valuePropName:"fileList2",normalize:this.normFile,onChange:this.handImgChange.bind(this)})(p.default.createElement(h.Upload,{name:"file",action:(0,g.getUrl)()+"/property/image/upload-img",data:{file:this.state.files},listType:"picture-card",onPreview:this.handlePreview.bind(this),beforeUpload:this.beforeUpload.bind(this)},this.state.isUpload?l:null)),p.default.createElement(h.Modal,{visible:this.state.previewVisible,footer:null,onCancel:this.handleCancel.bind(this)},p.default.createElement("img",{alt:"example",style:{width:"100%"},src:this.state.previewImage}))),p.default.createElement(y,u({label:"企业联系人"},a,{hasFeedback:!0}),t("link_man",{rules:[{type:"string",pattern:/^[\u2E80-\u9FFF]+$/,required:!0,message:"请输入20以内文字"}]})(p.default.createElement(h.Input,{maxLength:20,placeholder:"请输入联系人"}))),p.default.createElement(y,u({label:"联系电话"},a,{hasFeedback:!0}),t("link_phone",{rules:[{type:"string",pattern:/^((0\d{2,3}-\d{7,8})|(1\d{10}))$/,required:!0,message:"请输入固定电话号或者手机号"}]})(p.default.createElement(h.Input,{placeholder:"请输入联系电话"}))),p.default.createElement(y,u({label:"邮箱地址"},a,{hasFeedback:!0}),t("email",{rules:[{type:"email",required:!0,message:"请输入50位以内，必须存在@.com格式，不能输入文字、特殊符号"}]})(p.default.createElement(h.Input,{maxLength:50,placeholder:"请输入邮箱地址"}))),p.default.createElement(y,u({label:"支付宝账号"},a,{hasFeedback:!0}),t("alipay_account",{rules:[{type:"string",pattern:/^((\w)+(\.\w+)*@(\w)+((\.\w+)+)|(1\d{10}))$/,required:!0,message:"请输入正确支付宝账号"}]})(p.default.createElement(h.Input,{placeholder:"请输入支付宝账号"}))),p.default.createElement(y,u({label:"登录账号"},a,{hasFeedback:!0}),t("login_name",{rules:[{type:"string",pattern:/^[0-9a-zA-Z.@]{4,30}$/,required:!0,message:"请输入4-30位字符"}]})(p.default.createElement(h.Input,{maxLength:30,placeholder:"请输入登录账号"}))),p.default.createElement(y,u({label:"关联手机号码"},a,{hasFeedback:!0}),t("login_phone",{rules:[{required:!0,message:"请输入关联手机号码"},{min:11,max:11,message:"请输入正确手机号"}]})(p.default.createElement(h.Input,{placeholder:"请输入关联手机号码"}))),p.default.createElement(y,u({label:"状态"},a),t("status",{rules:[{required:!0,message:"请选择状态"}],initialValue:"1"})(p.default.createElement(_,null,p.default.createElement(h.Radio,{value:"1"},"启用"),p.default.createElement(h.Radio,{value:"2"},"禁用")))),p.default.createElement(y,{wrapperCol:{span:12,offset:2}},p.default.createElement(h.Button,{type:"ghost",onClick:this.handleBack.bind(this),className:"mr1"},"返回"),p.default.createElement(h.Popconfirm,{title:"确定要新增企业？",onConfirm:this.handleSubmit.bind(this)},p.default.createElement(h.Button,{type:"primary",className:"ant-btn-lg"},"提交"))))))}}]),t}(p.default.Component);E=h.Form.create()(E),t.default=(0,d.connect)(function(e){return{estateCompanyAdd:e.estateCompanyAdd}})(E)}});