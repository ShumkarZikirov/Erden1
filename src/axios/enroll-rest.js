import instance from "./settings";

export const postEnroll = (data) => {
    console.log(data)
    return instance.post('/enroll/create/',data)
}