import { FormattedMessage } from "react-intl";
const generateCols = (col) => {
  return col.map((e) => {
    const { title, key, content, ...rest } = e;

    const colTitle = e?.title ? (
      <FormattedMessage id={e.title} />
    ) : e?.key ? (
      <FormattedMessage id={e.key} />
    ) : (
      <FormattedMessage id={e} />
    );

    return {
      title: colTitle,
      dataIndex: e?.key ? e.key : e,
      key: e?.key ? e.key : e,
      ellipsis: true,
      // responsive: ["md"],
      // width: col.length > 3 ? 120 : "",
      render: e?.content
        ? (text, record) => (
            <div className="text-overflow min-w-[130px] text-start">
              {e.content(text, record)}
            </div>
          )
        : (text) => <div className="text-overflow min-w-[130px]">{text}</div>,
      ...rest,
    };
  });
};
export { generateCols };
