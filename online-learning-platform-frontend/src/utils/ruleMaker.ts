import { validateEmail, validatePhoneNumber } from "./validation";

export default function initRuleMaker(fieldName: String) {
  const ruleObj = {
    require: (value: any) => !!value || `${fieldName} is required`,
    phoneNumberFormat: (value = "") =>
      validatePhoneNumber(value) || `${fieldName} is not in a valid format`,
    requireMinLength6: (value: string) =>
      value.length >= 6 || `${fieldName} must be at least 6 length`,
    requireMinLength8: (value: string) =>
      value.length >= 8 || `${fieldName} must be at least 8 length`,
    emailFormat: (value = "") => validateEmail(value) || `${fieldName} is not in a valid format`
  };
  return ruleObj;
}
