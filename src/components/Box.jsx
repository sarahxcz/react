import react, {Component} from 'react'
export default class Steps extends Component{
    render () {
        return <div className='box col-sm-3'> 
        <span className='material-icons' style={{fontSize:100,color:"this.props.color"}}>{this.props.icon}</span>
        <p>{this.props.value} {this.props.unit}</p>
        </div>
    }
}