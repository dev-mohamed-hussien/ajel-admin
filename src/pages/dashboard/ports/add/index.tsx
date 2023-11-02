import PermissionGuard from "middlewares/Permissions";
import Edit from "../edit/[id]";
import middleware from "utlis/navigation/mw";
import { config } from "../index";
function Add() {
  return <Edit />;
}


export default middleware(Add, [
  PermissionGuard(config.add.url, config.add.type),
]);
