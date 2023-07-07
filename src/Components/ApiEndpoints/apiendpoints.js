let BASE_URL = "";

if (process.env.NODE_ENV !== "production") {
  BASE_URL = "https://fakestoreapi.com/";
} else {
  BASE_URL = "https://fakestoreapi.com/";
}

export const API_ENDPOINTS = {
  Categories: BASE_URL + "products/categories",
  Product_API: BASE_URL + "products/category/",
  Detail_API: BASE_URL + "products/",
  //   SECONDARY_API: BASE_URL + "secondaryvoltageview/lists",
  //   GBI_PROBLEMS_API: BASE_URL + "gbiproblems",
  //   USER_LOGIN: BASE_URL + "/user_login",
  //   SIGNUP_USER: BASE_URL + "/user/signup",
  //   FORGETPASS: BASE_URL + "/forgetpassword",
  //   CHANGEPASS: BASE_URL + "/changepass",
  //   VERIFYACCOUNT: BASE_URL + "/view_user_profile/1",
  //   LOCATION_API: BASE_URL + "location/listing",
  //   ACTIVE_DATA: BASE_URL + "groundingconductordata",
  //   VIEW_IMAGES: BASE_URL + "upload/imagedata/lists/",
  //   EDIT_IMAGES: BASE_URL + "/upload/imagedata/edit_image_data/",
  //   DELETE_IMAGES_API: BASE_URL + "/upload/imagedata/delete_data/",
  //   SERACH_API: BASE_URL + "listserachcustomerdata",
  //   ADD_IAMGE: BASE_URL + "upload/profile",
  //   BONDED_BAR_API: BASE_URL + "bonded_bar/listing",
  //   IMAGE_DATA: BASE_URL + "upload/imagedata/insert",
  //   BONDED_CONDUCTOR_API: BASE_URL + "bonded_conductor/listing",
  //   FEEDER_DATA: BASE_URL + "feederinsertdata",
  //   WIRING_LISTS_API: BASE_URL + "wringview/lists",
  //   VOLT_LIST_API: BASE_URL + "voltageview/lists",
  //   COMPONENTS_API: BASE_URL + "electricalcomponentview/lists",
  //   OTHER_API: BASE_URL + "othercomponentview/lists",
  //   SERACH_REPORT: BASE_URL + "listserach",
  //   DELETE_API: BASE_URL + "contactdatadel/",
  //   VIEW_CUST: BASE_URL + "/contactdataview/lists/",
  //   FEINSERT: BASE_URL + "feinsert/",
  //   FEDELETE_API: BASE_URL + "fedel/",
  //   FEVIEW: BASE_URL + "feview/lists/",
  //   FEEDIT: BASE_URL + "feupdate",
  //   MANAGEREPORT: BASE_URL + "managereportsupdate/",
  //   CUSTOMER_TYPE_API: BASE_URL + "customertype/listing",
  //   CONTACT_INSERT: BASE_URL + "contactdatainsert",
  //   GBI_PROBLEMS: BASE_URL + "/gbilistdata",
  //   CUST_EDIT_API: BASE_URL + "contactdataupdate",
  //   SEC_DATA_INSERT_API: BASE_URL + "secondrydatainsert",
  //   MOUNTING_TYPE_API: BASE_URL + "mounting_types/listing",
  //   ENCLOSURE_TYPE_API: BASE_URL + "enclose/listing",
  //   INSULATION_TYPE: BASE_URL + "/insulationview/lists",
  //   AWG_SIZE: BASE_URL + "/awgview/lists",
  //   MATERIAL_DATA: BASE_URL + "/materialview/lists",
  //   NUMBER_PHASE_DATA: BASE_URL + "/number_of_phase_conductor/lists",
};
