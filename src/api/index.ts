import { http } from '../utils/http';

interface RoomListParams {
  pageNo?: number;
  pageSize?: number;
  [key: string]: unknown;
}

export function fetchRoomList(params: RoomListParams = {}) {
  return http.get('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList', {
    params: {
      pageNo: 1,
      pageSize: 3,
      ...params,
    },
  });
}

export const featchRoomList = fetchRoomList;
