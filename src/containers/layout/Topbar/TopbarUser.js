import authAction from "redux/auth/actions";
import { Avatar, Popover, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { MdNotInterested, MdNotifications } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const { logout } = authAction;

export default function TopbarUser() {
  const dispatch = useDispatch();
  const profile = useSelector(({ profile }) => profile.data);
  const content = (
    <div className="min-w-[10rem] flex flex-col gap-[2px]">
      <Button
        className="w-full text-start"
        type="text"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <FormattedMessage id="logout" />
      </Button>
    </div>
  );
  const avatar = (record) => {
    let parts = record?.name?.toUpperCase().split(" ");
    let x = parts?.[0]?.[0] ?? "";
    let y = parts?.[1]?.[0] ?? "";
    return (
      <Avatar
        size={30}
        // src={record?.image}
        style={{ background: "lightGray" }}
        icon={x + y}
      />
    );
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <Popover
        content={content}
        trigger="click"
        placement="bottom"

        // visible={visible}
        // onVisibleChange={handleVisibleChange}
        // arrowPointAtCenter={false}
      >
        <div className="flex gap-2 h-10 items-center cursor-pointer">
          {/* <h4 className="m-0">{profile.name}</h4> */}
          {avatar({ name: "profile" })}

          <span className="text-[#607D8B] text-sm">Super Admin</span>
          {/* <Avatar icon={<UserOutlined />} /> */}

          <span className="userActivity online" />
        </div>
      </Popover>
    </div>
  );
}
