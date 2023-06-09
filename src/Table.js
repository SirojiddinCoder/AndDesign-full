import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Abdulaziz',
    age: 15,
    address: 'Namangan',
    tags: ['developer'],
  },
  {
    key: '2',
    name: 'Jasurbek',
    age: 21,
    address: 'Olaxamak',
    tags: ['frontend dev'],
  },
  {
    key: '3',
    name: 'Saida',
    age: 19,
    address: 'Namangan sh',
    tags: [ 'Frontend teacher'],
  },
];
const App5 = () => <Table columns={columns} dataSource={data} />;
export default App5;