import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function IsLogged(Comp: any, next: any) {
  const { idToken } = useSelector((state: any) => state.Auth);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (idToken) {
      navigate("/dashboard");
    }
  }, [idToken]);
  return Comp;
}

export function PrivatePages(Comp: any, next: any) {
  const { idToken } = useSelector((state: any) => state.Auth);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (!idToken) {
      navigate("/login");
    }
  }, [idToken]);
  return Comp;
}
