using LostButFound.API.DAL.Interfaces;
using LostButFound.API.Domian;

namespace LostButFound.API.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        public ApplicationDbContext _db;

        public UserRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public bool Create(User entity)
        {
            _db.Users.Add(entity);
            _db.SaveChanges();

            return true;
        }

        public bool Delete(User entity)
        {
            _db.Users.Remove(entity);
            _db.SaveChanges();

            return true;
        }

        public User Get(int id)
        {
            return _db.Users.FirstOrDefault(x => x.Id == id);
        }

        public User GetByName(string name)
        {
            return _db.Users.FirstOrDefault(x => x.Login == name);
        }

        public List<User> Select()
        {
            return _db.Users.ToList();
        }
    }
}
