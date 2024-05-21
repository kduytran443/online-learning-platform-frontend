const validatePhoneNumber = (value: string) => {
  const phoneRegex = /^0[1-9]{9,10}$/;
  return phoneRegex.test(value);
};

const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export { validatePhoneNumber, validateEmail };
