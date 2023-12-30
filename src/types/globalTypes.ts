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
export type IPasswordChange = {
  oldpassword: string;
  newpassword: string;
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
  role: string;
};

export type IAllUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type IAllBookingsForAdmin = {
  id: string;
  user: {
    name: string;
  };
  service: {
    title: string;
    image: string;
  };
  date: string;
  time: string;
  status: string;
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
  availability: string;
  image: string;
  price: string;
  category: string;
  features: {
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
  };
};

export type IFaqs = {
  id: string;
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  title4: string;
  description4: string;
  title5: string;
  description5: string;
  title6: string;
  description6: string;
};

export type IGetService = {
  id: string;
  title: string;
  price: string;
  category: string;
  availability: string;
};
export type IGetServiceFeatures = {
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
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

export type IBlogs = {
  id: string;
  username: string;
  title: string;
  image: string;
  blog: string;
};
