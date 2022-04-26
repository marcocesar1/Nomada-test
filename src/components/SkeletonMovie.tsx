import { Divider, Skeleton } from 'antd';

function SkeletonMovie() {
  return (
    <div className="skeleton__wrap">
        <div>
            <Skeleton.Avatar size={250} shape="square"/>
            <Skeleton/>
        </div>
        <div className="skeleton__info">
            <Skeleton/>
            <Divider />
            <Skeleton />
            <Divider />
            <Skeleton />
        </div>
    </div>
  )
}

export default SkeletonMovie