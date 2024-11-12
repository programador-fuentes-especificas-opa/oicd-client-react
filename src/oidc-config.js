const oidcConfig = {
    authority: "https://creditosdigitales.opa.com.co/auth", // e.g., "https://localhost:5001"
    client_id: "Cd-Client-Platform", // Set your client ID here
    RequirePkce : false,  // PKCE Required
    redirect_uri: window.location.origin + '', // Redirect URI after login
    post_logout_redirect_uri: window.location.origin + '',
    response_type: "id_token_token",
    scope: "openid profile email opa-cd-api", // Scopes you want to request
  };
  
  export default oidcConfig;
  