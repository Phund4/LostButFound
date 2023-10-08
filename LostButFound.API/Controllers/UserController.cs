using LostButFound.API.DAL.Interfaces;
using LostButFound.API.DAL.Repositories;
using LostButFound.API.Domian;
using Microsoft.AspNetCore.Mvc;

namespace LostButFound.API.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]/{id?}")]
    public class UserController : Controller
    {
        public IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public void CreateUser()
        {
            User newUser = new User()
            {
                Login = "danil",
                Password = "add123",
                Email = "2134rtyhjmgf",
                Rating = 5,
                Role = "User"
            };

            userRepository.Create(newUser);
        }

        public List<User> GetUsers()
        {
            return userRepository.Select();

        }

        [HttpGet]
        public User GetUserByName([FromQuery]string name)
        {
            return userRepository.GetByName(name);
        }


    }
}
