-- CreateTable
CREATE TABLE `socials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facebook` VARCHAR(255) NOT NULL,
    `youtube` VARCHAR(255) NOT NULL,
    `linkedin` VARCHAR(255) NOT NULL,
    `x` VARCHAR(255) NOT NULL,
    `about` TEXT NOT NULL,
    `address` TEXT NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `short_description` VARCHAR(500) NOT NULL,
    `image_1` VARCHAR(255) NOT NULL,
    `image_2` VARCHAR(255) NOT NULL,
    `image_3` VARCHAR(255) NOT NULL,
    `image_4` VARCHAR(255) NOT NULL,
    `long_description` LONGTEXT NOT NULL,
    `keywords` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `cat_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog_list` ADD CONSTRAINT `blog_list_cat_id_fkey` FOREIGN KEY (`cat_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
