"use server"

export async function doSocialLogin(formData) {
  const action = formData.get('action');

  console.log(action)
  
}

export async function doLogout() {
  
}