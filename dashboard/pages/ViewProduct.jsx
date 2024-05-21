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
        let details = item.description;
        const oembedRegex = /<oembed[^>]*>/g;
        const oembedMatch = details?.match(oembedRegex);
        console.log("asdasd", oembedMatch);
        if (oembedMatch) {
          const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];
          oembedUrl.replace("watch", "embed");
          console.log(
            "asdasdasdasdasd",
            oembedUrl.split("v=")[1].split("&")[0]
          );
          const iframeElement = `<iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/${
            oembedUrl.split("v=")[1].split("&")[0]
          }"
          title="Tom &amp; Jerry | Tom &amp; Jerry in Full Screen | Classic Cartoon Compilation | WB Kids"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>`;
          details = details?.replace(oembedRegex, iframeElement);
        }
        catdata.push({
          key: item._id,
          name: item.name,
          description: details,
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
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (_, record) => (
        <div dangerouslySetInnerHTML={{ __html: record.description }}></div>
      ),
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
