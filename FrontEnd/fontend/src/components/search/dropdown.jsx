
import { Button, Dropdown, Space } from 'antd';
// const items = [
//   {
//     key: '1',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item
//       </a>
//     ),
//   },
// ];
const Dropdown = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="Pick rooms"
      >
        <Button>bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space>
);
export default Dropdown;