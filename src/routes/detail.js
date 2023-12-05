import { useParams } from "react-router-dom";

function Detail(props){

    let { id } = useParams();
    let _id = props.shoes.find(function(x){
        return x.id == id
    });

    console.log(_id)

    return(
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+(_id.id+1)+".jpg"} width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{_id.title}</h4>
            <p>{_id.content}</p>
            <p>{_id.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div> 
    </>
    )
}

export default Detail;