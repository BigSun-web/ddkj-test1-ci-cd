import {Link} from 'umi'

export default function dva_test(props) {
  return (
    <div>
        dva_test

        <Link to='/dva_test/dva1'>dva1</Link>
        <Link to='/dva_test/dva2'>dva2</Link>
    {props.children}

    </div>
  )
}
