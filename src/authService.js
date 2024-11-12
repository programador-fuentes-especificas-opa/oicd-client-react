import { UserManager } from "oidc-client-ts";
import oidcConfig from "./oidc-config";

class AuthService {
  constructor() {
    this.userManager = new UserManager(oidcConfig);
  }

  // Initiate login
  login = () => {
    this.userManager.signinRedirect();
  };

  // Handle callback after login
  handleCallback = async () => {
    const user = await this.userManager.signinRedirectCallback();
    return user;
  };

  // Logout user
  logout = () => {
    this.userManager.signoutRedirect();
  };

  // Get user info
  getUser = async () => {
    const user = await this.userManager.getUser();
    return user;
  };

  // Remove user (used in logout)
  removeUser = () => {
    this.userManager.removeUser();
  }
}

const authService = new AuthService();
export default authService;
