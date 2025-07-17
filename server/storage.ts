import { downloads, feedback, type Download, type InsertDownload, type Feedback, type InsertFeedback } from "@shared/schema";

export interface IStorage {
  createDownload(download: InsertDownload): Promise<Download>;
  getDownloadStats(): Promise<{ total: number; byPlatform: Record<string, number> }>;
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
  getFeedback(): Promise<Feedback[]>;
}

export class MemStorage implements IStorage {
  private downloads: Map<number, Download>;
  private feedback: Map<number, Feedback>;
  private currentDownloadId: number;
  private currentFeedbackId: number;

  constructor() {
    this.downloads = new Map();
    this.feedback = new Map();
    this.currentDownloadId = 1;
    this.currentFeedbackId = 1;

    // Initialize with some mock data for demonstration
    this.initializeMockData();
  }

  private initializeMockData() {
    // Mock download data
    const mockDownloads = [
      { platform: "windows", version: "1.0.0", userAgent: "Mozilla/5.0", ipAddress: "192.168.1.1" },
      { platform: "macos", version: "1.0.0", userAgent: "Mozilla/5.0", ipAddress: "192.168.1.2" },
      { platform: "linux", version: "1.0.0", userAgent: "Mozilla/5.0", ipAddress: "192.168.1.3" },
    ];

    mockDownloads.forEach(download => {
      const id = this.currentDownloadId++;
      this.downloads.set(id, {
        ...download,
        id,
        createdAt: new Date(),
      });
    });

    // Mock feedback data
    const mockFeedback = [
      { name: "Алексей Петров", email: "alexey@example.com", message: "Отличное приложение для корпоративного общения. Безопасность на высшем уровне, интерфейс интуитивно понятный.", rating: 5 },
      { name: "Мария Сидорова", email: "maria@example.com", message: "Пользуюсь уже полгода. Очень удобно обмениваться файлами с клиентами. Рекомендую всем!", rating: 5 },
      { name: "Дмитрий Иванов", email: "dmitry@example.com", message: "Лучший мессенджер для работы с командой. Групповые чаты, видеозвонки - все работает безупречно.", rating: 5 },
    ];

    mockFeedback.forEach(feedback => {
      const id = this.currentFeedbackId++;
      this.feedback.set(id, {
        ...feedback,
        id,
        createdAt: new Date(),
      });
    });
  }

  async createDownload(insertDownload: InsertDownload): Promise<Download> {
    const id = this.currentDownloadId++;
    const download: Download = {
      ...insertDownload,
      id,
      createdAt: new Date(),
    };
    this.downloads.set(id, download);
    return download;
  }

  async getDownloadStats(): Promise<{ total: number; byPlatform: Record<string, number> }> {
    const downloads = Array.from(this.downloads.values());
    const total = downloads.length;
    const byPlatform: Record<string, number> = {};

    downloads.forEach(download => {
      byPlatform[download.platform] = (byPlatform[download.platform] || 0) + 1;
    });

    return { total, byPlatform };
  }

  async createFeedback(insertFeedback: InsertFeedback): Promise<Feedback> {
    const id = this.currentFeedbackId++;
    const feedback: Feedback = {
      ...insertFeedback,
      id,
      createdAt: new Date(),
    };
    this.feedback.set(id, feedback);
    return feedback;
  }

  async getFeedback(): Promise<Feedback[]> {
    return Array.from(this.feedback.values());
  }
}

export const storage = new MemStorage();
