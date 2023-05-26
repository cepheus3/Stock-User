const reducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        ...state,
        token: action.token,
      };
    case 'companyName':
      return {
        ...state,
        companyName: action.companyName,
      };
    case 'TotalSell':
      return {
        ...state,
        TotalSell: action.TotalSell,
      };
    case 'amount':
      return {
        ...state,
        amount: action.amount,
      };
    case 'customer':
      return {
        ...state,
        customer: action.customer,
      };
      case 'userEmail':
        return {
          ...state,
          userEmail: action.userEmail,
        };
    case 'company':
      return {
        ...state,
        company: action.company,
      };

      case 'currentCompany':
        return {
          ...state,
          currentCompany: action.currentCompany,
        };
    default:
      return state;
  }
};
export default reducer;
