export const test=(req,res)=> {
    res.status(200).json({ message: 'Get user data API ROUTE IS WORKING' });
  
};
// Now go to api/routes/user.route.js and import this function and use it in the route.