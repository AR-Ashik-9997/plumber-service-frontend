export type FormData = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type ILogin = {
  email: string;
  password: string;
};

export type IProfile = {
  username: string;
  contactNo: string;
  address: string;
  image: string;
  bio: string;
};

export type ICreateUser = {
  name: string;
  email: string;
  password: string;  
  profile: {   
    contactNo: string;
    address: string;
    image: string;
    bio: string;
  };
};
