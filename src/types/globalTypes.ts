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

export type IAllUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type ISingleUserProfile = {
  contactNo: string;
  address: string;
  image: string;
  bio: string;
  role: string;
};
export type IDProps = {
  params: any;
};
export type IServices = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
  serviceDetails: {
    title: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
  };
};
export type IGetServiceDetails = {
  title: string;
  description: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
};
export type IGetService = {
  id: string;
  title: string;
  price: string;
  category: string;
};

export type ICreateAdmin = {
  name: string;
  email: string;
  password: string;
  role: string;
  profile: {
    contactNo: string;
    address: string;
    image: string;
    bio: string;
  };
};
export type ICardServices = {
  id: string;
  title: string;
  description: string;
  image: string;
};
export type IServiceDetailse = {
  title: string;
  description: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
};
