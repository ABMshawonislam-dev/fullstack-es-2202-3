import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";

const ViewProduct = () => {
  let [catlist, setCatList] = useState([]);
  useEffect(() => {
    async function allcat() {
      let data = await axios.get("http://localhost:8000/api/v1/product/allpro");

      let catdata = [];

      data.data.map((item) => {
        catdata.push({
          key: item._id,
          name: item.name,
          image: item.image,
        });
      });
      setCatList(catdata);
    }

    allcat();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img width={30} src={`http://localhost:8000${record.image}`} />
      ),
    },
  ];
  return <Table dataSource={catlist} columns={columns} />;
};

export default ViewProduct;
