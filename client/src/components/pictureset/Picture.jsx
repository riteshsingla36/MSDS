import React from 'react'
// import { Link } from 'react-router-dom'
import "./picture.css"

const Picture = () => {
  return (
    <div className="parent_div">
        <div className="major_pic">
            <picture><img className="major_picture" src="https://pentagram-production.imgix.net/b214c549-fbb4-4fe5-a66e-a1b6064bb1fc/Galvan_CaseStudy_1.jpg?rect=400%2C0%2C7200%2C4500&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2" alt="lazy" /></picture>
        </div>
        <div className="minor_pic_div">
          <div className="minnor_pic">
              <picture><img className="minnor_pictures" src="https://pentagram-production.imgix.net/83b4c6c2-a786-4076-a9fc-626e1e8724c1/nu_case-01.jpg?rect=400%2C0%2C7201%2C4501&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2" alt="lazy" />Hello</picture>
              <picture><img className="minnor_pictures" src="https://pentagram-production.imgix.net/97385094-fbcf-47df-8f5f-51148998ce9e/MW_STC_1_cover.jpg?rect=169%2C0%2C1730%2C1080&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2" alt="lazy" />Hello</picture>
              <picture><img className="minnor_pictures" src="https://pentagram-production.imgix.net/ba82eb05-4fe5-475a-a72c-75084a045f98/1_Hero_Logo.png?rect=0%2C0%2C1920%2C1200&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2" alt="lazy" />Hello</picture>
              <picture><img className="minnor_pictures" src="https://pentagram-production.imgix.net/03e1c184-e6fe-4f48-a794-edb7cd6da67d/AH_Skittledog_Video1_Cover.jpg?rect=338%2C0%2C3460%2C2160&w=360&fit=crop&q=70&fm=jpg&auto=format&h=226&dpr=2" alt="lazy" />Hello</picture>
          </div>
        </div>
    </div>  
  )
}

export default Picture
