import prisma from "../../lib/prisma";

export const getMembersWithTestimonial = async () => {
    const members = await prisma.member.findMany({
        select: {
            name: true,
            role: true,
            url: true,
            testimonial: {
                select: {
                    content: true
                }
            }
        }
      });
  
  return members;
};
