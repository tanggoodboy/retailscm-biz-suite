
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'




const menuData = {menuName:"员工资质", menuFor: "employeeQualifier",
  		subItems: [
  
  		],
}

const renderTextCell=(value, record)=>{

	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+"字)"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	if(!value){
		return '空'
	}
	if(value == null){
		return '空'
	}
	return (`￥${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{

	return  (value? '是' : '否')

}

const renderReferenceCell=(value, record)=>{

	return (value ? value.displayName : '暂无') 

}

const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record) },
  { title: '员工', dataIndex: 'employee', render: (text, record) => renderReferenceCell(text, record)},
  { title: '合格的时间', dataIndex: 'qualifiedTime', render: (text, record) =>renderDateCell(text,record) },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '9',render: (text, record)=>renderTextCell(text,record) },
  { title: '水平', debugtype: 'string', dataIndex: 'level', width: '6',render: (text, record)=>renderTextCell(text,record) },
  { title: '备注', debugtype: 'string', dataIndex: 'remark', width: '13',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: '序号',
  employee: '员工',
  qualifiedTime: '合格的时间',
  type: '类型',
  level: '水平',
  remark: '备注',

}


const EmployeeQualifierBase={menuData,displayColumns,fieldLabels,displayColumns}
export default EmployeeQualifierBase



