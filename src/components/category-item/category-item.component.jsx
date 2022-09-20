import './category-item.styles.css'

const CategoryItem = ({category}) => {
    const { title, imageUrl} = category;
    return (
<div  className='category-container'>
          <img className='category-image' src={imageUrl} />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
    )
}

export default CategoryItem;