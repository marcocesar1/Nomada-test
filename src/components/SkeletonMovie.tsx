import { Divider, Skeleton } from 'antd';

function SkeletonMovie() {
  return (
    <div className="skeleton__wrap">
        <div>
            <Skeleton.Avatar size={250} shape="square"/>
            <Skeleton/>
        </div>
        <div className="skeleton__info">
            <Skeleton active/>
            <Divider />
            <Skeleton active />
            <Divider />
            <Skeleton active/>
        </div>
    </div>
  )
}

export default SkeletonMovie