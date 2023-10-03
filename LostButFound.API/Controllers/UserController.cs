using Microsoft.AspNetCore.Mvc;

namespace LostButFound.API.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]/{id?}")]
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
