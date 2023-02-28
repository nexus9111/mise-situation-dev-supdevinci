import { Card } from 'antd';
import "../styles/cardStyle.css"

const CardComponent = ({company}) => {
    
    return ( 
        <div className='card-Container'>
            <Card
                title={company.name}
                bordered={false}
                className='card'
            >
                <p>Catégorie : {company.category}</p>
                <p>Activity : {company.activitySection}</p>
                <p>Card content</p>
            </Card>
        </div>
        
     );
}
 
export default CardComponent;