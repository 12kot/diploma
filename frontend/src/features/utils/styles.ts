import cxx from "classnames/bind";

export const cx = (...rest: (string | undefined | boolean | number)[]) => {
  // @ts-expect-error cxx
  return cxx(...rest);
};
