import { httpInstance } from "@/utils/http-util";

// 获取用户学习报告列表
export const getUserReportList = (
  subcourseId: number,
  classId: number,
  searchText: string,
  page: number,
  count: number
) => {
  return httpInstance({
    url: "/course_report/",
    method: "GET",
    params: {
      subcourse_id: subcourseId,
      class_id: classId,
      title: searchText,
      page: page,
      count: count,
      type: "send",
      status: 0,
    },
    headers: {
      "content-type": "application/json",
    },
    withCredentials: true,
  });
};