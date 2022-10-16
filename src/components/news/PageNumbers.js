import Pagination from 'react-bootstrap/Pagination';

function PageNumbers() {
    return (
        <>
            <Pagination>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
            </Pagination>
        </>    
    )

}
  
export default PageNumbers