import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Result, Tooltip,Image,Card} from 'antd';
const { Meta } = Card;



export default function AntDesign() {
  return (
    <div>

<Tooltip title="search">
        <Button type="primary" danger shape="circle" icon={<SearchOutlined />} />
      </Tooltip>

      <div className="checkbox">
        
      </div>
   
      <Result
    status="403"
    title="403"
    subTitle="serverda xatolik bor iltimos sahifani qayta yuklang"
    extra={<Button type="primary">Qayta yuklash</Button>}
  />

<Image
    width={200}
    src="https://portfolio-uitc.ziyotest.uz/media/students_work/Rectangle_95.png"
  />
 <div className="block">
 <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://portfolio-uitc.ziyotest.uz/media/students_work/Rectangle_95.png" />}
  >
    <Meta title="Hazratim" description="UITC.UZ" />
  </Card>
 </div>
    </div>
  )
}
